# <SafeAreaView> - has no effects on android devices

# so in "android" we have to manually add padding/margin

# above can also be done using platform specific code

# or use statusBar height of device as a padding from top

# We can use multiple stylesheet object in a single component, but right > left

# platform specific code can also be writeen in some style property

# everthing is js in react native, even css are js objects and properties

<!-- ---------------------SECTION------------------------ -->

# 1. Dimensions 2. Device Orientation 3. FlexBox 4. Absolute and Realtive Postioning

<!-- ------------------------------------------------------------->

## 1. Dimensions of component on screen

- Density Independent Pixels e.g. fontSize:20
- Physical Pixels =DIPs \* Scale Factor (of device)
- Window (window & screen) - in android window is smaller than screen
- get dimensions: Dimensions("screen") or Dimensions("window")

## 2. Detecting Orientation Changes

- in app.json : change "orientation" to "default" to support both landscape & portrait screens
- hooks : functions that adds extra capabilities to functional components
  (github.com/react-native-community/hooks)
- Hooks :

  1.useAccessibilityInfo 2. useAppState 3.useBackHandler 4.useCameraRoll 5.useClipboard
  6.useDimensions 7. useImageDimensions 8.useKeyboard 9.useInteractionManager 10.useDeviceOrientaion 11.useLayout

  ## Installing React Native Hooks Library

  > > npm i @react-native-community/hooks

  (a)useDimensions : we can get correct dimension of device whether we're in portrait or landscape mode. It always returns updates dimensions.

  ## NOTE: useDimensions() is no longer supported, USE "useWindowsDimensions()"

  e.g.
  (a) console.log("use window dimensions: ", useWindowDimensions());

  > > Output: use window dimensions: {"fontScale": 1.149999976158142, "height": 748.6666666666666, "scale": 3, "width": 360}
  > > (b)console.log("use device orientation:", useDeviceOrientation());
  > > Output: portait

  ## Setting Height Dynamically using useDeviceOrientation() hook

  e.g.
  const {landscape} = useDeviceOrienatation()
  height: landscape ? "30%" : "100%",

  ## FLEXBOX (in react-native)

  its different from css flexbox
  e.g. flex:1, grows to take available space

  NOTE : SafeAreaView works better than View (in my android device)

  e.g.
  <>
  <SafeAreaView
  style={{
          flex: 0.5,
          backgroundColor: "dodgerblue",
        }} ></SafeAreaView>
  <SafeAreaView
  style={{
          flex: 0.5,
          backgroundColor: "red",
        }} ></SafeAreaView>
  </>

  ## it takes half screen sizes

  # FlexBox Direction -- visit react docs
