import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
  BottomNavigationTabElement,
  Layout,
} from '@ui-kitten/components';
import React from 'react';

export const BarBottom = props => {
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route): BottomNavigationTabElement => {
    const { options } = props.descriptors[route.key];
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title}
        icon={options.tabBarIcon}
      />
    );
  };

  return (
    <BottomNavigation
      appearance="default"
      selectedIndex={props.state.index}
      onSelect={onSelect}>
      {props.state.routes.map(createNavigationTabForRoute)}
    </BottomNavigation>
  );
};
