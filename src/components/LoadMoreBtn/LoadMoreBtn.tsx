interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn = ({ onLoadMore }: LoadMoreBtnProps) => {
  return (
    <button type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
