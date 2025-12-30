const Pagination = ({ pagination = {}, onPageChange }) => {
  const {
    page = 1,
    totalPages = 1,
    hasPrevPage = false,
    hasNextPage = false
  } = pagination

  if (totalPages <= 1) return null

  return (
    <div className="mt-10 flex items-center justify-center gap-6 text-white/80">
      <button
        disabled={!hasPrevPage}
        onClick={() => onPageChange(page - 1)}
        className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm transition
                   disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10"
      >
        Prev
      </button>

      <span className="text-sm font-medium">
        Page <span className="text-white">{page}</span> of{' '}
        <span className="text-white">{totalPages}</span>
      </span>

      <button
        disabled={!hasNextPage}
        onClick={() => onPageChange(page + 1)}
        className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm transition
                   disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
