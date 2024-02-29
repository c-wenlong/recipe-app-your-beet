import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const TimerControl = () => {
  const [timer, setTimer] = useState(0); // Time in minutes
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countdownRef = useRef(null);

  function handleTimer(value) {
    if (timer + value > 0) {
      setTimer((timer) => timer + value * 60);
    } else {
      setTimer(0);
    }
  }
  function runTimer() {
    setIsRunning(true);
    setIsPaused(false);
    if (countdownRef.current) {
      clearInterval(countdownRef.current); // Clear any existing interval
    }
    countdownRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdownRef.current); // Stop the interval
          setIsRunning(false); // Update state to reflect stopped timer
          setIsPaused(false); // Since the timer is not paused but actually stopped
          // Alert the user that the timer has stopped
          Alert.alert("Timer Alert", "Time is up!.");
          return 0; // Reset timer or set it to 0
        }
        return prevTimer - 1;
      });
    }, 1000);
  }

  function handleStart() {
    if (timer > 0) {
      setIsRunning(true);
      setIsPaused(false);
      runTimer();
    } else {
      alert("Please set the timer first!");
    }
  }
  function handleStop() {
    clearInterval(countdownRef.current);
    setIsPaused(true);
  }
  function handleContinue() {
    runTimer();
    setIsPaused(false);
  }
  function handleReset() {
    clearInterval(countdownRef.current);
    setIsRunning(false);
    setIsPaused(false);
    setTimer(0);
  }

  // calculate the time values for display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleTimer(1)}>
          <Text style={styles.buttonText}>+ 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleTimer(5)}>
          <Text style={styles.buttonText}>+ 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleTimer(-1)}>
          <Text style={styles.buttonText}>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleTimer(-5)}>
          <Text style={styles.buttonText}>- 5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(timer)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {!isRunning && !isPaused ? (
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleStop}>
              <Text style={styles.buttonText}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleReset}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            {isPaused && (
              <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default TimerControl;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  timerContainer: {
    borderWidth: 4,
    borderColor: "black",
    width: 250,
    height: 80,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    fontSize: 50,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 15,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 10,
    color: "#fff",
  },
});
