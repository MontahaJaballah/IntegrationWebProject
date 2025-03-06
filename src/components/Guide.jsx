"use client";
import * as React from "react";
import { useLocation } from "react-router-dom";

function BreadcrumbContainer() {
  const location = useLocation();

  // Map of path names to readable names
  const pathNameMap = {
    "/": "Home",
    "/forum": "Forum",
    "/forum/post": "Post",
    "/features": "Features",
    // Add more mappings as needed
  };

  // Generate breadcrumb items dynamically
  const generateBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);

    // Special handling for forum post with dynamic ID
    if (pathSegments[0] === 'forum' && pathSegments[1] === 'post' && pathSegments.length > 2) {
      return [
        { label: "Home", href: "/" },
        { label: "Forum", href: "/forum" },
        { label: "Post", href: `/forum/post/${pathSegments[2]}` }
      ];
    }

    // Default breadcrumb generation
    return pathSegments.map((path, index) => {
      const fullPath = '/' + pathSegments.slice(0, index + 1).join('/');
      return {
        label: pathNameMap[fullPath] || path.charAt(0).toUpperCase() + path.slice(1),
        href: fullPath
      };
    });
  };

  const fullBreadcrumbItems = generateBreadcrumbItems();

  // Only add Home if it's not already the first item
  const breadcrumbItemsWithHome = fullBreadcrumbItems[0]?.label !== "Home"
    ? [{ label: "Home", href: "/" }, ...fullBreadcrumbItems]
    : fullBreadcrumbItems;

  return (
    <nav className="w-full h-[75px] mx-auto max-w-[1144px]">
      <div className="flex items-center justify-start bg-zinc-300 px-5 py-0 mx-auto my-0 h-full max-w-[1440px]">
        <ol className="flex text-xl tracking-normal leading-5 text-black max-sm:text-base font-body">
          {breadcrumbItemsWithHome.map((item, index) => (
            <React.Fragment key={`breadcrumb-${item.href}-${index}`}>
              <li key={`breadcrumb-item-${item.href}-${index}`}>
                <a
                  href={item.href}
                  className={`font-body ${index === breadcrumbItemsWithHome.length - 1
                    ? 'text-brand-primary font-bold'
                    : 'text-black hover:text-brand-primary'
                    }`}
                >
                  {item.label}
                </a>
              </li>
              {index < breadcrumbItemsWithHome.length - 1 && (
                <li key={`breadcrumb-separator-${index}`} className="mx-2 font-body">/</li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default BreadcrumbContainer;
