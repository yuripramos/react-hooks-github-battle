import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children, ReactNode } from 'react';

const ActiveLink = ({
  children,
  activeClassName,
  href,
  ...props
}: {
  href: string;
  children: ReactNode;
  activeClassName: string;
  as?: string;
  exact?: boolean;
}) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child?.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === href || asPath === props.as ? `${childClassName} ${activeClassName}`.trim() : childClassName;

  if (React.isValidElement(child)) {
    return (
      <Link href={href as HTMLAnchorElement['href']} {...props}>
        {React.cloneElement(child, {
          className: className || null,
        })}
      </Link>
    );
  }

  return <></>;
};

export default ActiveLink;
