const changeCompleteStatus = (objArrayList, taskObjIndex) => {
  // const index = objArrayList.indexOf(taskObj)
  objArrayList[taskObjIndex].completed = !objArrayList[taskObjIndex].completed
};

export { changeCompleteStatus }