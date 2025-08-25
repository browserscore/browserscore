# Browser Score

Formerly known as [The CSS3 Test](https://css3test.com).
The name was no longer accurate, since it has been testing a lot more than CSS 3 for years now, and the new name gives it room to grow beyond just CSS.

# How to add tests

The tests live in the [`tests/`](tests/) directory.
They are JS files for flexibility, but most of the test data is basically JSON.
The data schema is designed to make it as easy as possible to add new tests.
Head over to the [tests README](tests/README.md) for more information on it.

## Guidelines

- Don't add specs when there are NO implementations of ANYTHING in the spec.
- Don't add tests that already exist, just with different values. E.g. if `calc(1px + 2px)` is a testcase, adding `calc(2px + 2px)` won't help.
