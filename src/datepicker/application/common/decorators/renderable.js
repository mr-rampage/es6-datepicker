/* eslint no-param-reassign: 0 */

export function renderable(...pipeline) {
  return function renderPipeline(target) {
    Object.defineProperty(target.prototype, 'render', {
      value: function render(...args) {
        return pipeline.reduce((lastResult, stage) => [stage.apply(null, lastResult)], args);
      },
    });
  };
}
