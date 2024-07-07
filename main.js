/*
56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


Ваша задача - объединить все перекрывающиеся интервалы и вернуть массив неперекрывающихся интервалов, которые покрывают все интервалы на входе.

Вот шаги, которые мы будем следовать:

1. Сортируем интервалы по начальному значению каждого интервала.
2. Инициализируем массив для хранения объединенных интервалов с первым интервалом в качестве начального интервала.
3. Проходим по каждому интервалу, начиная со второго. 
   Если текущий интервал перекрывается с последним интервалом в объединенных интервалах (т.е. начало текущего интервала меньше или равно концу последнего интервала),
   объединяем их, обновляя конец последнего интервала максимальным значением между концом последнего интервала и концом текущего интервала. 
   В противном случае добавляем текущий интервал в объединенные интервалы.
4. Возвращаем объединенные интервалы.

Your task is to merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.

Here are the steps we will follow:

1. Sort the intervals by the start value of each interval.
2. Initialize an array to store the merged intervals with the first interval as the initial interval.
3. Go through each interval, starting from the second. 
   If the current interval overlaps with the last interval in the merged intervals (i.e., the start of the current interval is less than or equal to the end of
   the last interval), merge them by updating the end of the last interval to the maximum value between the end of the last interval and the end of the current interval.
   Otherwise, add the current interval to the merged intervals.
4. Return the merged intervals.

*/

function merge(intervals) {
  // Сортируем интервалы по начальному значению каждого интервала
  // Sort the intervals by the start value of each interval
  intervals.sort((a, b) => a[0] - b[0]);

  // Инициализируем массив для хранения объединенных интервалов с первым интервалом в качестве начального интервала
  // Initialize an array to store the merged intervals with the first interval as the initial interval
  let merged = [intervals[0]];

  // Проходим по каждому интервалу, начиная со второго
  // Go through each interval, starting from the second
  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastInterval = merged[merged.length - 1];

    // Если текущий интервал перекрывается с последним интервалом в объединенных интервалах
    // If the current interval overlaps with the last interval in the merged intervals
    if (currentInterval[0] <= lastInterval[1]) {
      // Объединяем их, обновляя конец последнего интервала
      // Merge them by updating the end of the last interval
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    } else {
      // В противном случае добавляем текущий интервал в объединенные интервалы
      // Otherwise, add the current interval to the merged intervals
      merged.push(currentInterval);
    }
  }

  // Возвращаем объединенные интервалы
  // Return the merged intervals
  return merged;
}
