/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*global define */
/*jscs:disable maximumLineLength*/
/*jshint -W101*/

define(function (require, exports, module) {
    "use strict";

    module.exports = {
        APPLICATION: {
            $MENU: "Application",
            ABOUT_MAC: "About Photoshop…",
            PREFERENCES: "Preferences…",
            HIDE_APPLICATION: "Hide Photoshop",
            HIDE_OTHER_APPLICATIONS: "Hide Others",
            SHOW_ALL: "Show All",
            QUIT_APPLICATION_MAC: "Quit Photoshop"
        },
        FILE: {
            $MENU: "File",
            NEW: "New",
            NEW_EXTENDED: "New…",
            NEW_FROM_TEMPLATE: {
                $MENU: "New From Template",
                IPHONE_6_PLUS: "iPhone 6+",
                IPHONE_6: "iPhone 6",
                IPHONE_5: "iPhone 5",
                IPAD_12: "iPad Mini",
                IPAD_34: "iPad Retina",
                ANDROID_1080P: "Android 1080p",
                MS_SURFACE_PRO: "Microsoft Surface Pro",
                MS_SURFACE_PRO_3: "Microsoft Surface Pro 3",
                APPLE_WATCH_38MM: "Apple Watch 38mm",
                APPLE_WATCH_42MM: "Apple Watch 42mm",
                WEB_1440_900: "Web (1440 x 900)",
                WEB_1920_1080: "Web (1920 x 1080)"
            },
            OPEN: "Open...",
            OPEN_RECENT: {
                $MENU: "Open Recent"
            },
            CLOSE: "Close",
            SAVE: "Save",
            SAVE_AS: "Save As…",
            REVERT: "Revert",
            RENAME_DOCUMENT: "Rename…",
            GENERATE_ASSETS: "Generate Assets…",
            AUTO_GENERATE_IMAGE_ASSETS: "Auto Generate Assets",
            PLACE_EMBEDDED: "Place Embedded…",
            PLACE_LINKED: "Place Linked…",
            PACKAGE: "Package…",
            PRINT: "Print…",
            QUIT_APPLICATION_WIN: "Quit Photoshop"
        },
        EDIT: {
            $MENU: "Edit",
            UNDO: "Undo",
            REDO: "Redo",
            CUT: "Cut",
            CUT_ATTRIBUTES: "Cut Attributes | Style",
            COPY: "Copy",
            COPY_MERGED: "Copy Merged",
            COPY_ATTRIBUTES: "Copy Attributes | Style",
            COPY_CSS: "Copy CSS Attributes",
            PASTE: "Paste",
            PASTE_ATTRIBUTES: "Paste Attributes | Style",
            DELETE: "Delete",
            CLEAR_ATTRIBUTES: "Clear Attributes",
            DUPLICATE: "Duplicate Selection",
            DUPLICATE_WITH_OFFSET: "Duplicate Selection with Offset",
            SELECT_ALL: "Select All",
            DESELECT: "Deselect",
            INVERT_SELECTION: "Invert Selection"
        },
        LAYER: {
            $MENU: "Layer",
            CONVERT_TO_SMART_OBJECT: "Convert To Smart Object",
            FIND_LAYER: "Find Layer…",
            RENAME_LAYER: "Rename Layer…",
            MERGE_LAYERS: "Merge Layers",
            SEARCH: "Search",
            COMBINE: {
                $MENU: "Combine",
                COMBINE_UNION: "Union",
                COMBINE_SUBTRACT: "Subtract",
                COMBINE_INTERSECT: "Intersect",
                COMBINE_DIFFERENCE: "Difference"
            },
            TRANSFORM: {
                $MENU: "Transform",
                TRANSFORM_SCALE: "Scale",
                TRANSFORM_ROTATE: "Rotate",
                TRANSFORM_ROTATE_180: "Rotate 180º",
                TRANSFORM_ROTATE_LEFT: "Rotate Left",
                TRANSFORM_ROTATE_RIGHT: "Rotate Right"

            },
            CREATE_CLIPPING_MASK: "Create Clipping Mask",
            CREATE_ARTBOARD: "Create New Artboard",
            EDIT_VECTOR_MASK: "Edit Vector Mask"
        },
        TYPE: {
            $MENU: "Type",
            ADD_FONTS_FROM_TYPEKIT: "Add Fonts from Typekit…",
            BOLD: "Bold",
            ITALIC: "Italic",
            UNDERLINE: "Underline",
            CHANGE_CASE: {
                $MENU: "Change Case",
                LOWERCASE: "lowercase",
                UPPERCASE: "UPPERCASE",
                TITLECASE: "Title Case",
                SENTENCECASE: "Sentence case"
            },
            INCREASE_FONT_SIZE: "Increase Size",
            DECREASE_FONT_SIZE: "Decrease Size",
            TEXT_SPACING_TIGHTEN: "Tighten Kerning | Letter Spacing",
            TEXT_SPACING_LOOSEN: "Loosen Kerning | Letter Spacing",
            LINEHEIGHT_INCREASE: "Raise Line Height",
            LINEHEIGHT_DECREASE: "Lower Line Height",
            ALIGN_TEXT: {
                $MENU: "Align Text",
                ALIGN_TEXT_LEFT: "Left",
                ALIGN_TEXT_CENTER: "Center",
                ALIGN_TEXT_RIGHT: "Right",
                ALIGN_TEXT_JUSTIFY: "Justify"
            },
            SWASH: "Swash | …",
            OLD_STYLE: "Old Style | …",
            ORNAMENTS: "Ornaments | …",
            ORDINALS: "Ordinals | …",
            FRACTIONS: "Fractions | …",
            STANDARD_LIGATURES: "Standard Ligatures | …",
            DISCRETIONARY_LIGATURES: "Discretionary Ligatures | …",
            TITLING_ALTERNATES: "Titling Ligatures | …",
            CONTEXTUAL_ALTERNATES: "Contextual Alternates | …",
            STYLISTIC_ALTERNATES: "Stylistic Alternates | …",
            JUSTIFICATION_ALTERNATES: "Justification Alternates | …",
            CONVERT_TEXT_TO_OUTLINES: "Convert Text to Outlines"
        },
        ARRANGE: {
            $MENU: "Arrange",
            BRING_FORWARD: "Bring Forward",
            BRING_FRONT: "Bring to Front",
            SEND_BACKWARD: "Send Backward",
            SEND_TO_BACK: "Send to Back",
            LAYOUT_MAKE_GRID_OF_OBJECTS: "Make Grid of Objects…",
            LAYOUT_DIVIDE: "Divide…",
            LAYOUT_INSET: "Inset…",
            DISTRIBUTE: {
                $MENU: "Distribute Objects",
                DISTRIBUTE_HORIZONTAL: "Horizontally",
                DISTRIBUTE_VERTICAL: "Vertically",
                DISTRIBUTE_EVENLY: "Evenly"
            },
            ALIGN: {
                $MENU: "Align Objects",
                ALIGN_LEFT: "Left",
                ALIGN_CENTER: "Center",
                ALIGN_RIGHT: "Right",
                ALIGN_TOP: "Top",
                ALIGN_MIDDLE: "Middle",
                ALIGN_BOTTOM: "Bottom"

            },
            FLIP_HORIZONTAL: "Flip Horizontal",
            FLIP_VERTICAL: "Flip Vertical",
            SWAP_POSITION: "Swap Position",
            LOCK_LAYER: "Lock",
            UNLOCK_LAYER: "Unlock",
            GROUP_LAYERS: "Group",
            UNGROUP_LAYERS: "Ungroup"
        },
        VIEW: {
            $MENU: "View",
            ZOOM_IN: "Zoom In",
            ZOOM_OUT: "Zoom Out",
            FIT_TO_WINDOW: "Fit to Window",
            ACTUAL_SIZE: "Actual Size",
            ZOOM_TO_SELECTION: "Zoom to Selection",
            CENTER_SELECTION: "Center Selection",
            FULLSCREEN_MENUBAR: "Full Screen with Menu Bar",
            FULLSCREEN: "Full Screen",
            PRESENTATION: "Presentation",
            TOGGLE_EXTRAS: "Show | Hide Extras",
            TOGGLE_RULERS: "Show | Hide Rulers",
            TOGGLE_SMART_GUIDES: "Show Smart Guides",
            TOGGLE_GUIDES: "Show Guides"
        },
        WINDOW: {
            $MENU: "Window",
            MINIMIZE: "Minimize",
            BRING_ALL_TO_FRONT: "Bring All to Front",
            NEXT_DOCUMENT: "Next Document",
            TOGGLE_TOOLBAR: "Pin Toolbar",
            PREVIOUS_DOCUMENT: "Previous Document",
            RETURN_TO_STANDARD: "Return to Standard Photoshop",
            OPEN_DOCUMENT_ONE: "Document Name 1",
            OPEN_DOCUMENT_TWO: "Document Name 2",
            OPEN_DOCUMENT_THREE: "…etc…"
        },
        HELP: {
            $MENU: "Help",
            ABOUT_WIN: "About Photoshop…",
            RUN_TESTS: "Run Tests…",
            ACTION_FAILURE: "Test Action Failure…",
            RESET_FAILURE: "Test Reset Failure…",
            CORRUPT_MODEL: "Test Model Corruption…",
            UPDATE_CURRENT_DOCUMENT: "Update Current Document",
            RESET_RECESS: "Reset Design Space",
            TOGGLE_POLICY_FRAMES: "Show Policy Frames",
            TOGGLE_POSTCONDITIONS: "Verify Postconditions",
            OPEN_FIRST_LAUNCH: "Design Space Introduction",
            SHORTCUTS: "Keyboard Shortcuts",
            TWITTER: "Design Space on Twitter",
            HELPX: "Design Space Help",
            FORUM: "Design Space Forum"
        }
    };
});
