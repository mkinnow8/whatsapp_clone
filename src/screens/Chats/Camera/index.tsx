import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  CameraRuntimeError,
  PhotoFile,
  VideoFile,
  useCameraDevice,
  useCameraDevices,
  useCameraFormat,
} from 'react-native-vision-camera';
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';
import type { PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import {
  PinchGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  CONTENT_SPACING,
  CONTROL_BUTTON_SIZE,
  MAX_ZOOM_FACTOR,
  SAFE_AREA_PADDING,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from './../../../resources/contants';
import { Camera } from 'react-native-vision-camera';
import { MyContext } from '../../../context/globalContext';
import { CaptureButton } from './CaptureButton';
import { useIsFocused } from '@react-navigation/core';
import { useIsForeground } from '../../../hooks/useIsForeground';
import { COLORS, ROUTE } from '../../../resources';
import { flashAutoIcon, flashoffIcon, galleryIcon, reverseIcon } from '../../../assets/icons';
import { responsiveHeight, responsiveWidth, screenWidth } from '../../../utilities/responsiveFunctions';

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
  zoom: true,
});

type Props = {};

const CameraPage = (props: Props) => {
  const navigation = useNavigation();



  const [targetFps, setTargetFps] = useState(60);
  const [enableHdr, setEnableHdr] = useState(false);
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [enableNightMode, setEnableNightMode] = useState(false);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const { isTabHidden, setIsTabHidden } = useContext(MyContext);
  const zoom = useSharedValue(1);
  const camera = useRef<Camera>(null);
  const isPressingButton = useSharedValue(false);
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>('back')
  let device = useCameraDevice(cameraPosition);
  // check if camera page is active
  const isFocussed = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocussed && isForeground;

  const screenAspectRatio = SCREEN_HEIGHT / SCREEN_WIDTH;
  const format = useCameraFormat(device, [
    { fps: targetFps },
    { videoAspectRatio: screenAspectRatio },
    { videoResolution: 'max' },
    { photoAspectRatio: screenAspectRatio },
    { photoResolution: 'max' },
  ]);

  const fps = Math.min(format?.maxFps ?? 1, targetFps);
  const canToggleNightMode = device?.supportsLowLightBoost ?? false;
  const supportsHdr = format?.supportsPhotoHdr;
  const supportsFlash = device?.hasFlash ?? false;
  const supports60Fps = useMemo(
    () => device?.formats.some(f => f.maxFps >= 60),
    [device?.formats],
  );

  //#region Animated Zoom
  const minZoom = device?.minZoom ?? 1;
  const maxZoom = Math.min(device?.maxZoom ?? 1, MAX_ZOOM_FACTOR);

  const onInitialized = useCallback(() => {
    console.log('Camera initialized!');
    setIsCameraInitialized(true);
  }, []);
  const onError = useCallback((error: CameraRuntimeError) => {
    console.error(error);
  }, []);
  //#region Effects
  useEffect(() => {
    // Reset zoom to it's default everytime the `device` changes.
    zoom.value = device?.neutralZoom ?? 1;
  }, [zoom, device]);
  //#endregion

  useEffect(() => {
    setIsTabHidden(true);
    return () => {
      setIsTabHidden(!isTabHidden);
    };
  });

  const onMediaCaptured = useCallback(
    (media: PhotoFile | VideoFile, type: 'photo' | 'video') => {
      console.log(`Media captured! ${JSON.stringify(media)}`);
      navigation.navigate(ROUTE.MEDIA_PAGE, {
        path: media.path,
        type: type,
      });
    },
    [navigation],
  );

  //#region Pinch to Zoom Gesture
  // The gesture handler maps the linear pinch gesture (0 - 1) to an exponential curve since a camera's zoom
  // function does not appear linear to the user. (aka zoom 0.1 -> 0.2 does not look equal in difference as 0.8 -> 0.9)
  const onPinchGesture = useAnimatedGestureHandler<
    PinchGestureHandlerGestureEvent,
    { startZoom?: number }
  >({
    onStart: (_, context) => {
      context.startZoom = zoom.value;
    },
    // onActive: (event, context) => {
    //   // we're trying to map the scale gesture to a linear zoom here
    //   const startZoom = context.startZoom ?? 0
    //   const scale = interpolate(event.scale, [1 - 1 / SCALE_FULL_ZOOM, 1, SCALE_FULL_ZOOM], [-1, 0, 1], Extrapolate.CLAMP)
    //   zoom.value = interpolate(scale, [-1, 0, 1], [minZoom, startZoom, maxZoom], Extrapolate.CLAMP)
    // },
  });
  //#endregion

  //#region Callbacks
  const setIsPressingButton = useCallback(
    (_isPressingButton: boolean) => {
      isPressingButton.value = _isPressingButton;
    },
    [isPressingButton],
  );
  const reverseCamera = useCallback(() => {
    setCameraPosition((p) => (p === 'back' ? 'front' : 'back'))

  }, [])
  const onFlashPressed = useCallback(() => {
    setFlash((f) => (f === 'off' ? 'on' : 'off'))
  }, [])
  return (
    <View style={styles.container}>
      {device != null && (
        <PinchGestureHandler
          onGestureEvent={onPinchGesture}
        // enabled={isActive}
        >
          <Reanimated.View
            // onTouchEnd={onFocusTap}
            style={StyleSheet.absoluteFill}>
            <TapGestureHandler
              // onEnded={onDoubleTap}
              numberOfTaps={2}>
              <ReanimatedCamera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isActive}
                ref={camera}
                onInitialized={onInitialized}
                onError={onError}
                onStarted={() => console.log('Camera started!')}
                onStopped={() => console.log('Camera stopped!')}
                onPreviewStarted={() => console.log('Preview started!')}
                onPreviewStopped={() => console.log('Preview stopped!')}
                onOutputOrientationChanged={o =>
                  console.log(`Output orientation changed to ${o}!`)
                }
                onPreviewOrientationChanged={o =>
                  console.log(`Preview orientation changed to ${o}!`)
                }
                format={format}
                fps={fps}
                // photoHdr={photoHdr}
                // videoHdr={videoHdr}
                photoQualityBalance="quality"
                lowLightBoost={device.supportsLowLightBoost && enableNightMode}
                enableZoomGesture={false}
                // animatedProps={cameraAnimatedProps}
                exposure={0}
                enableFpsGraph={true}
                outputOrientation="device"
                photo={true}
                video={true}
              // audio={microphone.hasPermission}
              // enableLocation={location.hasPermission}
              // frameProcessor={frameProcessor}
              />
            </TapGestureHandler>
          </Reanimated.View>
        </PinchGestureHandler>
      )}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setEnableHdr(h => !h)}>
          <Image source={galleryIcon} style={styles.icon} />
        </TouchableOpacity>
        <CaptureButton
          camera={camera}
          onMediaCaptured={onMediaCaptured}
          cameraZoom={zoom}
          minZoom={minZoom}
          maxZoom={maxZoom}
          flash={supportsFlash ? flash : 'off'}
          enabled={isCameraInitialized && isActive}
          setIsPressingButton={setIsPressingButton}
        />
        <TouchableOpacity
          style={styles.button}
          // onPress={onFlipCameraPressed}
          onPress={() => reverseCamera()}
        >
          {/* <IonIcon name="camera-reverse" color="white" size={24} /> */}
          <Image source={reverseIcon} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      {/* <StatusBarBlurBackground /> */}

      <View style={styles.rightButtonRow}>
        <TouchableOpacity
          style={styles.button}
        // onPress={onFlashPressed}
        >
          <Image source={flashAutoIcon} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onFlashPressed()}
        >
          <Image source={flashoffIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { CameraPage };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
    width: screenWidth
  },

  button: {
    // marginBottom: CONTENT_SPACING,
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(20),
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: responsiveWidth(24),
    height: responsiveWidth(20),
    // borderRadius: responsiveWidth(20),
  },

  rightButtonRow: {
    position: 'absolute',
    right: responsiveWidth(10),
    gap: responsiveHeight(10),
    top: responsiveHeight(20)
  },
  topIcon: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
  },
  text: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
