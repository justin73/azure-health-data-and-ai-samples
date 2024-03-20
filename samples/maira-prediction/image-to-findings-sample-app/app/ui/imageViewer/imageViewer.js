import React, { useState, useEffect } from 'react';
import * as cornerstone from 'cornerstone-core';
import * as cornerstoneMath from 'cornerstone-math';
import * as cornerstoneTools from 'cornerstone-tools';
import Hammer from 'hammerjs';
import * as cornerstoneWebImageLoader from 'cornerstone-web-image-loader';

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
// cornerstone.registerImageLoader('myCustomLoader', WebImageLoader);

cornerstoneTools.external.Hammer = Hammer;

const divStyle = {
  width: '512px',
  height: '512px',
  position: 'relative',
  color: 'white',
};

const bottomLeftStyle = {
  bottom: '5px',
  left: '5px',
  position: 'absolute',
  color: 'white',
};

const bottomRightStyle = {
  bottom: '5px',
  right: '5px',
  position: 'absolute',
  color: 'white',
};


const CornerstoneElement = ({ stack }) => {
  const [localImageId, setLocalImageId] = useState(
    stack.imageIds[stack.currentImageIdIndex],
  );
  const [viewport, setViewport] = useState(
    cornerstone.getDefaultViewport(null, undefined),
  );
  const elementRef = React.createRef();


  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    cornerstone.enable(element);
    console.log('localImageId ---->', localImageId)
    cornerstone.loadImage(localImageId).then((image) => {
      cornerstone.displayImage(element, image);

      const stackToolState = cornerstoneTools.addStackStateManager(element, [
        'stack',
      ]);
      cornerstoneTools.addToolState(element, 'stack', stack);
      cornerstoneTools.mouseInput.enable(element);
      cornerstoneTools.mouseWheelInput.enable(element);
      cornerstoneTools.wwwc.activate(element, 1);
      cornerstoneTools.pan.activate(element, 2);
      cornerstoneTools.zoom.activate(element, 4);
      cornerstoneTools.zoomWheel.activate(element);
      cornerstoneTools.touchInput.enable(element);
      cornerstoneTools.panTouchDrag.activate(element);
      cornerstoneTools.zoomTouchPinch.activate(element);

      element.addEventListener('cornerstoneimagerendered', onImageRendered);
      element.addEventListener('cornerstonenewimage', onNewImage);
      window.addEventListener('resize', onWindowResize);
    });

    return () => {
      element.removeEventListener('cornerstoneimagerendered', onImageRendered);
      element.removeEventListener('cornerstonenewimage', onNewImage);
      window.removeEventListener('resize', onWindowResize);
      cornerstone.disable(element);
    };
  }, [localImageId]);

  const onImageRendered = () => {
    const viewport = cornerstone.getViewport(elementRef.current);
    setViewport(viewport);
  };

  const onNewImage = () => {
    const enabledElement = cornerstone.getEnabledElement(elementRef.current);
    setLocalImageId(enabledElement.image.imageId);
  };

  const onWindowResize = () => {
    cornerstone.resize(elementRef.current);
  };

  return (
    <div className="viewportElement" style={divStyle} ref={elementRef}>
      <canvas className="cornerstone-canvas" />
      <div style={bottomLeftStyle}>Zoom: {viewport.scale}</div>
      <div style={bottomRightStyle}>
        WW/WC: {viewport.voi.windowWidth} / {viewport.voi.windowCenter}
      </div>
    </div>
  );
};

export default CornerstoneElement;
