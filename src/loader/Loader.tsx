const loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        class="animate-spin inline-block size-36 border-[5px] border-current border-t-transparent text-black-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        
      </div>
    </div>
  );
};

export default loader;
