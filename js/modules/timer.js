/**
 * QuickBite - Cooking Timer Module
 * Handles background countdown, visual progress, audio alarms, presets, and floating widget
 */

import { Sound } from "./audio.js";

class CookingTimer {
  constructor() {
    this.totalSeconds = 300; // default 5 mins
    this.remainingSeconds = 300;
    this.isRunning = false;
    this.timerId = null;
    this.label = "Cooking Timer";
    this.subscribers = new Set();
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    callback(this.getState());
    return () => this.subscribers.delete(callback);
  }

  notify() {
    const state = this.getState();
    this.subscribers.forEach(cb => cb(state));
  }

  getState() {
    return {
      totalSeconds: this.totalSeconds,
      remainingSeconds: this.remainingSeconds,
      isRunning: this.isRunning,
      label: this.label,
      formattedTime: this.formatTime(this.remainingSeconds),
      progressRatio: this.totalSeconds > 0 ? (this.remainingSeconds / this.totalSeconds) : 0
    };
  }

  formatTime(totalSecs) {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  setDuration(seconds, label = "Cooking Timer") {
    this.pause();
    this.totalSeconds = Math.max(1, seconds);
    this.remainingSeconds = this.totalSeconds;
    this.label = label;
    this.notify();
  }

  start() {
    if (this.isRunning) return;
    if (this.remainingSeconds <= 0) {
      this.remainingSeconds = this.totalSeconds;
    }
    this.isRunning = true;
    Sound.playTick();

    this.timerId = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds -= 1;
        this.notify();

        if (this.remainingSeconds === 0) {
          this.handleComplete();
        }
      }
    }, 1000);

    this.notify();
  }

  pause() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.isRunning = false;
    this.notify();
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.notify();
  }

  addMinute() {
    this.totalSeconds += 60;
    this.remainingSeconds += 60;
    this.notify();
  }

  handleComplete() {
    this.pause();
    Sound.playTimerDone();

    // Trigger visual notification banner
    window.dispatchEvent(new CustomEvent("quickbite:timer-done", {
      detail: { label: this.label }
    }));
  }
}

export const Timer = new CookingTimer();
