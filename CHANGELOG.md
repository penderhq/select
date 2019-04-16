# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2019-04-16

### Changed
- Changed imports from `/es/` to `/lib/`


## [0.4.0] - 2019-01-27

### Added
- Added `OptionList`. This component can now be used seperately from the select button in an uncontrolled way. For example inline or with a custom button.
- Added `noOptionsRenderer`. Responsible for rendering the `no options` state.

## [0.3.0] - 2019-01-27

### Removed
- Removed `optionNameGetter`. This can now be controlled using the `optionRenderer` prop.

### Added
- Added `optionRenderer` prop responsible for rendering the option.

## [0.2.0] - 2019-01-24
### Added
- Support for clearing the choice.

## [0.1.0] - 2019-01-23
### Added
- Support displaying an icon for each option.
- Support aligning the dropdown to the left.
- Support making a choice from a list of options.