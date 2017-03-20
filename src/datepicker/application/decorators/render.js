/* eslint no-param-reassign: 0 */

export function render(...pipeline) {
  return function renderPipeline(target) {
    target.prototype.render = function (...args) {
      return pipeline.reduce((lastResult, stage) => [stage.apply(null, lastResult)], args);
    };
  };
}
