const scheduleCourse = courses => {
  courses.sort((a, b) => a[1] - b[1]);
  const pq = new MaxPriorityQueue();
  let day = 0; // 已消耗时间
  for (const [duration, lastDay] of courses) {
    if (day + duration <= lastDay) {
      day += duration;
      pq.enqueue(duration);
    } else if (!pq.isEmpty() && duration < pq.front().element) {
      day -= pq.dequeue().element - duration;
      pq.enqueue(duration);
    }
  }
  return pq.size();
};
