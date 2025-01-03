```javascript
// components/MyComponent.js
export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    // Only run setInterval if the component is mounted.
    if (typeof window !== 'undefined') {
        interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
    }

    return () => {
      // Ensure clearInterval is called even if setInterval hasn't run.
      clearInterval(interval);
    };
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```