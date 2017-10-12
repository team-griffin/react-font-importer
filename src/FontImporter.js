import React from 'react';
import PropTypes from 'prop-types';
import {
  setPropTypes,
  setDisplayName,
  compose,
  mapProps,
} from 'recompose';
import { map, compose as rCompose, join } from 'ramda';

const FontImporter = ({
  children,
  css,
}) => {
  /* eslint-disable react/no-danger */
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: css,
        }}
      />
      {children}
    </div>
  );
  /* eslint-enable react/no-danger */
};

export const PureComponent = FontImporter;

export const mapUrlsToImports = map((url) => {
  return `@import url('${url}');`;
});

export const mapImportsToCss = rCompose(
  join('\n'),
  mapUrlsToImports,
);

export const enhance = compose(
  setDisplayName('FontImporter'),
  setPropTypes({
    children: PropTypes.node,
    urls: PropTypes.array.isRequired,
  }),
  mapProps((ownerProps) => {
    return {
      children: ownerProps.children,
      css: mapImportsToCss(ownerProps.urls),
    };
  }),
);

export default enhance(FontImporter);
