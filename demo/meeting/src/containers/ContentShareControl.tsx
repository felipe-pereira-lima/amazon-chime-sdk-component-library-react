import React from 'react';
import {
  ControlBarButton,
  Pause,
  Play,
  ContentShare,
} from 'amazon-chime-sdk-component-library-react';

import { useContentShare } from '../providers/ContentShareProvider';
import { useContentShareControls } from '../providers/ContentShareControlProvider';

const ContentShareControl: React.FC = () => {
  const { isLocalUserSharing } = useContentShare();
  const {
    isContentSharePaused,
    toggleContentShare,
    togglePauseContentShare,
  } = useContentShareControls();

  return (
    <>
      <ControlBarButton
        icon={<ContentShare />}
        onClick={toggleContentShare}
        label={isLocalUserSharing ? 'Stop Screen Share' : 'Start Screen Share'}
      />
      {isLocalUserSharing && (
        <ControlBarButton
          icon={isContentSharePaused ? <Play /> : <Pause />}
          onClick={togglePauseContentShare}
          label={isContentSharePaused ? 'Play' : 'Pause'}
        />
      )}
    </>
  );
};

export default ContentShareControl;
