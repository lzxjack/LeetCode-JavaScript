const minNumber = (nums1, nums2) => {
  const num1 = Math.min(...nums1);
  const num2 = Math.min(...nums2);
  const res1 = (num1 < num2 ? num1 : num2) * 10 + (num1 < num2 ? num2 : num1);
  const common = nums1.filter(item => nums2.includes(item));
  const res2 = Math.min(...common);

  return Math.min(res1, res2);
};
