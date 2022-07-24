import { useState, useEffect } from 'react';

// From https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci

// Custom hook to trigger a function only once per use case.

export default function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        }
    );

    return debouncedValue;
};
