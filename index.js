const summaryEl = document.getElementById("summary");
const insightsEl = document.getElementById("insights");
const insightsRestrictedEl = document.getElementById("insightsRestricted");

const dashboardSummaryEl = document.getElementById("dashboardSummary");
const dashboardInsightsEl = document.getElementById("dashboardInsights");
const dashboardInsightsRestrictedEl = document.getElementById(
  "dashboardInsightsRestricted"
);

const displaySummary = () => {
  dashboardSummaryEl.classList.remove("hide-item");

  insightsEl.classList.remove("selected");
  insightsRestrictedEl.classList.remove("selected");

  dashboardInsightsEl.classList.add("hide-item");
  dashboardInsightsRestrictedEl.classList.add("hide-item");

  summaryEl.classList.add("selected");
};

const displayInsights = () => {
  dashboardInsightsEl.classList.remove("hide-item");

  summaryEl.classList.remove("selected");
  insightsRestrictedEl.classList.remove("selected");

  dashboardSummaryEl.classList.add("hide-item");
  dashboardInsightsRestrictedEl.classList.add("hide-item");

  insightsEl.classList.add("selected");
};

const displayInsightsRestricted = () => {
  dashboardInsightsRestrictedEl.classList.remove("hide-item");

  summaryEl.classList.remove("selected");
  insightsEl.classList.remove("selected");

  dashboardSummaryEl.classList.add("hide-item");
  dashboardInsightsEl.classList.add("hide-item");

  insightsRestrictedEl.classList.add("selected");
};

summaryEl.addEventListener("click", displaySummary);

insightsEl.addEventListener("click", displayInsights);

insightsRestrictedEl.addEventListener("click", displayInsightsRestricted);

const barGraphHorizontal = document
  .getElementById("barGraphHorizontal")
  .getContext("2d");
const myChartH = new Chart(barGraphHorizontal, {
  type: "bar",
  data: {
    labels: [
      "API pricing",
      "Insights",
      "DashBoard",
      "Team Stats",
      "Organization Overview",
      "Company Stats",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          "rgb(0, 191, 255)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
          "rgb(0, 191, 255)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      chartAreaBorder: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
});

const barGraphHorizontal2 = document
  .getElementById("barGraphHorizontal2")
  .getContext("2d");
const myChartH2 = new Chart(barGraphHorizontal2, {
  type: "bar",
  data: {
    labels: ["API Pricing", "Role", "Team"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 30],
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          "rgb(0, 191, 255)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
          "rgb(0, 191, 255)",
        ],
        borderWidth: 1,
        barThickness: 50,
      },
    ],
  },
  options: {
    plugins: {
      chartAreaBorder: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
});

const ctx = document.getElementById("barGraph").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          "rgb(0, 191, 255)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
          "rgb(0, 191, 255)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const pie = document.getElementById("pieGraph").getContext("2d");
const myPieChart = new Chart(pie, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgb(125, 42, 109)",
          "rgb(147, 13, 240)",
          "rgb(195, 197, 133)",
          "rgb(23, 214, 73)",
          "rgb(214, 24, 141)",
          "rgb(214, 72, 24)",
        ],
        borderColor: [
          "rgb(125, 42, 109)",
          "rgb(147, 13, 240)",
          "rgb(195, 197, 133)",
          "rgb(23, 214, 73)",
          "rgb(214, 24, 141)",
          "rgb(214, 72, 24)",
        ],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
  },
});

const doughnut = document.getElementById("doughnutGraph").getContext("2d");
const myDoughnut = new Chart(doughnut, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgb(125, 42, 109)",
          "rgb(147, 13, 240)",
          "rgb(195, 197, 133)",
          "rgb(23, 214, 73)",
          "rgb(214, 24, 141)",
          "rgb(214, 72, 24)",
        ],
        borderColor: [
          "rgb(125, 42, 109)",
          "rgb(147, 13, 240)",
          "rgb(195, 197, 133)",
          "rgb(23, 214, 73)",
          "rgb(214, 24, 141)",
          "rgb(214, 72, 24)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      chartAreaBorder: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  },
});

const lineGraph = document.getElementById("lineGraph").getContext("2d");
const myLineGraph = new Chart(lineGraph, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgb(125, 42, 109)",
          "rgb(147, 13, 240)",
          "rgb(195, 197, 133)",
          "rgb(23, 214, 73)",
          "rgb(214, 24, 141)",
          "rgb(214, 72, 24)",
        ],
        borderColor: [
          "rgb(125, 42, 109)",
          "rgb(147, 13, 240)",
          "rgb(195, 197, 133)",
          "rgb(23, 214, 73)",
          "rgb(214, 24, 141)",
          "rgb(214, 72, 24)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

