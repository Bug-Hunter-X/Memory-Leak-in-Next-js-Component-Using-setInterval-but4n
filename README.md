# Next.js setInterval Memory Leak Bug

This repository demonstrates a common bug in Next.js applications involving the use of `setInterval` within a `useEffect` hook without proper cleanup.  The bug leads to a memory leak and unexpected component behavior.  The solution showcases the correct way to handle `setInterval` to prevent these issues.

## Bug Description
The `MyComponent` attempts to update the count every second using `setInterval`. However, because the cleanup function (`clearInterval`) is not being properly handled, this will keep running even after the component is unmounted.  This results in a memory leak and potentially other issues.