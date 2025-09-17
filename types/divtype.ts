import React from 'react';

export interface DivType extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children: React.ReactNode | string;
}   