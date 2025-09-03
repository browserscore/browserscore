# Architecture Notes

## Feature objects

- Feature objects are created for the data in `tests/` (specs and the features within them)
- Each feature corresponds to a `Feature` class instance. There are more specific types as well, e.g. `CSSPropertyFeature`.
- Each spec corresponds to a `Spec` class instance.
- Both `Feature` and `Spec` extend the same base class, `AbstractFeature`.
- `AbstractFeature` instances can be useful on their own, as a generic feature group. From this point onwards "Feature object" refers to an `AbstractFeature` instance.
- Most Feature objects have an `id` property, which includes the core "value" of the object. E.g. in a spec it may be the shortname, in a `CSSPropertyFeature` it may be the property name, in a `CSSValueFeature` it may be the value name, etc.

### Feature children

- Feature objects are trees, and can include other Feature objects as children. E.g. a property for `text-align` may include children for `text-align: left`, `text-align: right`, `text-align: center`, etc.
	- By default, `children` and `tests` properties create children, but each feature class can define how its children work via the static `children` property.
	- We are transitioning from using a generic `tests` property to using names that make more sense for the feature type (also because now the same feature type can have multiple types of tests, e.g. an `@rule` can have tests for preludes, for descriptors, etc.)
- Feature objects have a canonical parent, provided during their construction (i.e. `new Feature(def, parent)`), but any number of Feature objects can include them among their children. This is useful for creating different groupings of features.
- `FeatureProxy` allows using the metadata from a feature while overriding its children, which is useful for filtering.
- Some properties are "inherited" from their parent, but that is not defined anywhere right now and is done ad hoc in the code.

### Feature tests

- `feature.test()` runs the tests for a feature if there are still any tests pending. If everything has been tested already, it does nothing.
- `feature.testSelf()` tests support for a Feature object when it doesn't have children.
- Some Feature objects have a **gating test**, i.e. their leaf test is run even when they _do_ have children, because if it fails, we can skip the children. E.g. if `text-align` is not supported, no need to go checking `text-align: left`, `text-align: right`, etc. `feature.gatingTest` is used to check for this and Feature subclasses can also define base values for it as a static property.

### Number of features included in a `Feature` object

- By default, `Feature` objects correspond to one feature
- Data can set `isGroup: true` to override that (useful for grouping features into other features, e.g. all `border` longhands and shorthands under the same group so they don't clutter up the display). This is defined via `forceTotal` (arguably a poor name). Setting `forceTotal` to `false` makes the Feature correspond to as many features as its children.

## Score objects

Each `AbstractFeature` instance has a `score` property, which is a `Score` instance. `Score` objects manage all the numerical stats about a feature (passed tests, failed tests, total tests, time taken etc.)
- `Score` instances are linked to a Feature object via the `node` property. Then, `parent` and `children` are just getters for the corresponding `Score` objects on that Feature object's parent and children.
- `Score` instances have both `passed` and `passedTests` and `total` and `totalTests` properties.
  - The `passedTests`/`failedTests`/`totalTests` properties count the number of low-level tests, and the `passed`/`total` properties count the number of **features** that passed or failed (see `forceTotal` above).
  - When there are children, if there is no `forceTotal`, the `passed`/`total` properties are calculated based on the children's scores. If there is a `forceTotal`, the `passed`/`total` properties should be scaled down to what they otherwise would have been.
- `recalc()` recalculates the stats of the `Score` instance and its ancestors based on the children's scores. Ideally this should be non-destructive if a `Score` object is up to date, but we don't handle gating tests well and in practice they are ignored.
	- There are also `recalcSelf()`, `recalcDescendants()` and `recalcAncestors()` methods for more fine-grained control.

