# REUP App Store Submission Guide

## Prerequisites
1. Apple Developer Account ($99/year) - https://developer.apple.com/programs/enroll/
2. Xcode installed on Mac
3. iOS project ready in: `reup/web/ios/`

## Step 1: Transfer Project to Mac

Copy the iOS folder from Windows to your Mac:
```bash
# On Mac, create folder and copy
mkdir -p ~/Desktop/reup-ios
# Copy from Windows via network share, USB, or cloud
```

Or clone from the project folder.

## Step 2: Open in Xcode

```bash
cd ~/Desktop/reup-ios
open App/App.xcworkspace
```

## Step 3: Configure Signing

1. Click on "App" in the project navigator
2. Select the "App" target
3. Go to "Signing & Capabilities" tab
4. Check "Automatically manage signing"
5. Select your Team (Apple Developer account)
6. Change Bundle Identifier to: `com.yourname.reup` (must be unique)

## Step 4: Add App Icon

1. Open `App/Assets.xcassets/AppIcon.appiconset`
2. Drag a 1024x1024 PNG icon into the slot
3. Xcode will generate all sizes automatically

## Step 5: Test on Device (Optional)

1. Connect your iPhone
2. Select your device in the top bar
3. Press Play button to build and run

## Step 6: Archive and Submit

1. Select "Any iOS Device" as destination
2. Product → Archive
3. Wait for archive to complete
4. Click "Distribute App"
5. Select "App Store Connect"
6. Follow the prompts

## Step 7: App Store Connect

1. Go to https://appstoreconnect.apple.com
2. Create new app listing
3. Fill in:
   - App name: REUP
   - Description: The marketplace for secondhand fashion
   - Category: Shopping
   - Screenshots (required)
   - Privacy policy URL

## Need Help?

Message Rick - I'll walk you through any step.

---
Generated: March 22, 2026
