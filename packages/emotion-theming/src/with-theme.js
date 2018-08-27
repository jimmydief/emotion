// @flow
import * as React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { withCSSContext } from '@emotion/core'

type Props = { theme: Object }

// should we change this to be forwardRef/withCSSContext style so it doesn't merge with props?

const withTheme = (Component: React.ComponentType<Props>) => {
  const componentName = Component.displayName || Component.name || 'Component'

  let WithTheme = withCSSContext((props, context) => {
    return <Component theme={context.theme} {...props} />
  })

  WithTheme.displayName = `WithTheme(${componentName})`

  return hoistNonReactStatics(WithTheme, Component)
}

export default withTheme
