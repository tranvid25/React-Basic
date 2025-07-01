import React, { useEffect } from "react";
import { createPortal } from "react-dom";

// 🔧 Tạo wrapper 1 lần duy nhất
const portalWrapper = document.createElement("div");
portalWrapper.id = "portal-wrapper";

const Portal = ({
  children,
  containerClassName = "",
  overlayClassName = "bg-black bg-opacity-20",
  contentClassName = "",
}) => {
  useEffect(() => {
    // Thêm vào body nếu chưa có
    if (!document.body.contains(portalWrapper)) {
      document.body.appendChild(portalWrapper);
    }

    return () => {
      // 🧹 Cleanup nếu cần
      if (document.body.contains(portalWrapper)) {
        document.body.removeChild(portalWrapper);
      }
    };
  }, []);

  // 🎯 Nội dung được truyền vào
  const renderContent = (
    <div className={`fixed inset-0 z-50 ${containerClassName}`}>
      <div className={`absolute inset-0 overlay ${overlayClassName}`}>
        <div className={`relative z-10 content ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(renderContent, portalWrapper);
};

export default Portal;
