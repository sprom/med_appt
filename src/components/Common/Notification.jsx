import React, { useState, useCallback } from 'react';
import './Notification.css';

// Notification Component for system-wide alerts and messages
const Notification = ({ message, type = 'info', duration = 3000, onClose = null }) => {
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
      default:
        return 'ℹ';
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  return (
    <div className={`notification notification-${type}`}>
      <span className="notification-icon">{getIcon()}</span>
      <span className="notification-message">{message}</span>
      <button
        className="notification-close"
        onClick={handleClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

// Notification Manager Hook
let notificationId = 0;
const notificationListeners = new Set();

export const useNotification = () => {
  const showNotification = useCallback((message, type = 'info', duration = 3000) => {
    const notification = {
      id: notificationId++,
      message,
      type,
      duration,
    };
    notificationListeners.forEach((listener) => listener(notification));
    return notification.id;
  }, []);

  React.useEffect(() => {
    return () => {
      notificationListeners.clear();
    };
  }, []);

  return { showNotification };
};

export const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);

  React.useEffect(() => {
    const handleAddNotification = (notification) => {
      setNotifications((prev) => [...prev, notification]);
    };

    notificationListeners.add(handleAddNotification);

    return () => {
      notificationListeners.delete(handleAddNotification);
    };
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          duration={notification.duration}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};

export default Notification;
