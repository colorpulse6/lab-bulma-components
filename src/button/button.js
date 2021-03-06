import React from 'react'

import 'bulma/css/bulma.css'




function CoolButton(props) {

    const classes = {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',

      }
    
      let array = Object.keys(props);
      let selectedClasses;

        if (array) {
            let buttonClassesArray = Object.keys(classes);
            selectedClasses = array.map((prop) => {
            if (buttonClassesArray.includes(prop)) {
                return classes[prop];
            }
            });
        }

        return (
            <button type="submit" class={"button" + " " + selectedClasses.join(" ") + props.className}>{props.children}</button>
        )
    }
    

export default CoolButton;