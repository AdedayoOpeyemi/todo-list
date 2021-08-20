const changeCompleteStatus = (objArrayList, taskObjIndex) => {
  objArrayList[taskObjIndex ].completed = !objArrayList[taskObjIndex].completed;
  localStorage.setItem('TaskList', JSON.stringify(objArrayList));
};

export { changeCompleteStatus as default };