"use client";

import React, { useEffect, useState } from 'react';

export default function Loading_Screen () {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300); // Delay dalam milidetik (misalnya, 300ms)

    return () => clearTimeout(timer); // Bersihkan timer jika komponen di-unmount
  }, []);

  if (!show) {
    return null; // Tidak menampilkan loading jika belum mencapai delay
  }

  return (
    <div className="loading-screen">
      Loading...
    </div>
  );
};
