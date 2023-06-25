function reverseJsonBackToSheet(mapDataList, headList) {
  return [
    headList,
    ...mapDataList.map((dataMap) => {
      const dataArray = [];
      Object.entries(dataMap).forEach(([key, value]) => {
        const targetKeyIndex = headList.indexOf(key);
        if (targetKeyIndex !== -1) {
          dataArray[targetKeyIndex] = value;
        }
      });
      return dataArray;
    }),
  ];
}

module.exports = reverseJsonBackToSheet;
