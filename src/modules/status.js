const changeCompleteStatus = (objArrayList, taskObjIndex) => {
  objArrayList[taskObjIndex - 1].completed = !objArrayList[taskObjIndex -1].completed;
  localStorage.setItem('TaskList', JSON.stringify(objArrayList));
};

export { changeCompleteStatus as default };