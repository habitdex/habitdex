"use client";

// libraries
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// components
import HabitCard from "../../../../../components/Cards/HabitCard/HabitCard";

// misc
import styles from "./AllHabit.module.scss";

// api hooks
import useHabit from "@/hooks/apis/useHabit";

const AllHabit = (props) => {
  const [allHabits, setAllHabits] = useState([]);

  const { getHabits, isLoading, error } = useHabit();

  useEffect(() => {
    getHabits(props.event, (habits) => {
      setAllHabits(habits);
    });
  }, []);

  return (
    <div>
      <div className={styles.habit__container}>
        {!isLoading &&
          allHabits.map((habit, index) => {
            return (
              <HabitCard
                id={habit._id}
                key={index}
                name={habit.habit_name}
                description={habit.description}
                icon={habit.icon}
                color={habit.theme_color}
                contributions_per_day={habit.contributions_per_day}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AllHabit;
