import * as React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
	title?: string;
}

// React TypeScript Cheatsheet doesn't recommend using React.FunctionalComponent.
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
// declare const ReactTimeAgo: React.FC<Props>;

type FlagComponent = (props: Props) => JSX.Element;

declare const Flag: FlagComponent;

export default Flag;