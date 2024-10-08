export const Spinner = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
<h1 className="text-3xl font-bold">Loading...</h1>
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
      >
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >
        {typeof window !== 'undefined' && 'Loading...'}
      </span>
    </div>
          </div>
  
  )
}
