"use client";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const GithubCalendar = (props) => {
  console.log(props.calendar);
  const username = "anuragdaksh";
  const date = new Date();
  const absoluteDate = new Date(date.toDateString());
  const today = absoluteDate.toISOString().split("T")[0];
  absoluteDate.setFullYear(absoluteDate.getFullYear() - 1);
  const oneYearAgo = absoluteDate.toISOString().split("T")[0];

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        backgroundColor: "#252a41",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        {props.error ? (
          <p>Error fetching user data</p>
        ) : (
          <>
            <h1>{username}&apos;s Github history</h1>
            <CalendarHeatmap
              startDate={oneYearAgo}
              endDate={today}
              // values={[
              //   { date: '2024-01-01', count: 1 },
              //   { date: '2024-01-22', count: 2 },
              //   { date: '2024-01-30', count: 3 },
              //   { date: '2024-03-21', count: 3 }

              // ]}
              values={props.calendar}
              classForValue={(value) => {
                if (!value) {
                  return "color-empty";
                }
                return `color-github-${value.count}`;
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GithubCalendar;
