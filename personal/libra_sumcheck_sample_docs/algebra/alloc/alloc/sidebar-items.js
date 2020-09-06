initSidebarItems({"enum":[["AllocInit","A desired initial state for allocated memory."],["ReallocPlacement","A placement constraint when growing or shrinking an existing allocation."]],"fn":[["alloc","Allocate memory with the global allocator."],["alloc_zeroed","Allocate zero-initialized memory with the global allocator."],["dealloc","Deallocate memory with the global allocator."],["handle_alloc_error","Abort on memory allocation error or failure."],["realloc","Reallocate memory with the global allocator."]],"struct":[["AllocErr","The `AllocErr` error indicates an allocation failure that may be due to resource exhaustion or to something wrong when combining the given input arguments with this allocator."],["Global","The global memory allocator."],["Layout","Layout of a block of memory."],["LayoutErr","The parameters given to `Layout::from_size_align` or some other `Layout` constructor do not satisfy its documented constraints."],["MemoryBlock","Represents a block of allocated memory returned by an allocator."]],"trait":[["AllocRef","An implementation of `AllocRef` can allocate, grow, shrink, and deallocate arbitrary blocks of data described via [`Layout`][]."],["GlobalAlloc","A memory allocator that can be registered as the standard library’s default through the `#[global_allocator]` attribute."]]});