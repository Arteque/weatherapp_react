import React from 'react';

export interface HeadingType extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode | string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}