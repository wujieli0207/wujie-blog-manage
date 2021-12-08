const useBasicTable = () => {
  // TODO 选择功能待实现
  const handleSelect = (val: any) => {
    console.log(val);
  };

  // TODO 翻页功能待实现
  const handlePagingChange = (option: any) => {
    console.log(option);
  };
  return {
    handleSelect,
    handlePagingChange,
  };
};

export default useBasicTable;
