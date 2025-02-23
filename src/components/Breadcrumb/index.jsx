import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Breadcrumb = () => {
  const location = useLocation();

  // Define breadcrumb mapping
  const breadcrumbMapping = {
    "/about": { title: "About" },
    "/loanagainstproperty": { title: "Loan Against Property" },
    "/businessloan": { title: "Business Loan" },
    "/goldloan": { title: "Gold Loan" },
  };

  // Get the current page title based on the URL
  const currentPath = location.pathname;
  const breadcrumbData = breadcrumbMapping[currentPath] || { title: "Home" };

  // Breadcrumb navigation links
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: breadcrumbData.title, link: currentPath, active: true },
  ];

  return (
    <div className="w-full mx-auto pt-52 py-16 px-10">
      <div className="container mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-5xl font-bold text-blue-900 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {breadcrumbData.title}
        </motion.h1>

        {/* Breadcrumb Navigation */}
        <motion.nav
          aria-label="breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ol className="flex space-x-2 text-lg">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="inline-flex items-center">
                <Link to={item.link} className="text-blue-600 hover:underline">
                  {item.title}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2 text-gray-500">/</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
