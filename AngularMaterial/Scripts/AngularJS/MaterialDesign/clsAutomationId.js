(function () {
    "use strict";

    angular.module("ngMaterial").directive("clsAutomationId", function () {
        var d = {
            restrict:"A",
            priority: 2,
            link: fnLink
        };
        return d;

        function fnLink($scope, $element, $attributes) {
            var tagName = $element[0].tagName.toLowerCase();
            var updateFunction = getUpdateFunction(tagName);

            var automationObserver = $attributes.$observe("clsAutomationId", function(value) {
                updateFunction($element, $attributes, value);
            });

            $element.on("$destroy", function() {
                automationObserver();
                automationObserver = updateFunction = tagName = null;
            });
        }

        function updateCheckbox($element, $attributes, automationId) {
            $element.children("div.md-container")
                .attr("cls-automation-id", automationId + "_target");
        }
        function updateSelect($element, $attributes, automationId) {
            $element.children("md-select-value")
            .attr("cls-automation-id", automationId + "_target");
        }

        function updateDatepicker($element, $attributes, automationId) {
            $element.children("input.datepicker-input")
                .attr("cls-automation-id", automationId + "_input");
            $element.children("[type='button']")
                .attr("cls-automation-id", automationId + "_button");
        }
        function updateListItem($element, $attributes, automationId) {
            if ($attributes.ngClick) {
                $element.children(".md-button")
                    .children("[type='button']")
                    .attr("cls-automation-id", automationId + "_target");
            }
        }
        function updateTabs($element, $attributes, automationId) {
            var children = $element.find('md-tab-item')
            if (children.length == 0) {
                requestAnimationFrame(updateTabs.bind(this, $element, $attributes, automationId));
            } else {
                var grandChildren = $element.find('md-tab-item');
                for (var i = 0; i < children.length; i++) {
                    $(children[i]).attr("cls-automation-id", automationId + "_" + i + "_target");
                    $(grandChildren[i])
                        .attr("cls-automation-id", automationId + "_" + i + "_targetTab");
                }
            }
        }
        function updateSlider($element, $attributes, automationId) {
            var thumb = $element.find(".md-thumb");
            var thumbText = $element.find(".md-thumb-text");

            thumb.attr("cls-automation-id", automationId + "_thumb");
            thumbText.attr("cls-automation-id", automationId + "_value");
        }
        function updateToast($element, $attributes, automationId) {
            if ($attributes.ngClick) {
                $element.children("[type='button']")
                    .attr("cls-automation-id", automationId + "_target");
            }
        }
        function updateDateInput($element, $attributes, automationId) {
            var textbox = $element.find("input.clsDateInput");
            if (textbox.length > 0) {
                textbox.attr("cls-automation-id", automationId + "_target");
            }
            var button = $element.find(".clsInputButton[type='button']");
            if (button.length > 0) {
                button.attr("cls-automation-id", automationId + "_button");
            }
        }
        function updateTimeInput($element, $attributes, automationId) {
            var textbox = $element.find("input.clsTimeInput");
            if (textbox.length > 0) {
                textbox.attr("cls-automation-id", automationId + "_target");
            }
            var button = $element.find(".clsInputButton");
            if (button.length > 0) {
                button.attr("cls-automation-id", automationId + "_button");
            }
        }
        function updateTimeZonePicker($element, $attributes, automationId) {
            var select = $element.find("md-select md-select-value");
            if (select.length > 0) {
                select.attr("cls-automation-id", automationId + "_target");
            }
        }
        function getUpdateFunction(tagName) {
            switch (tagName) {
                case "md-checkbox": return updateCheckbox;
                case "md-select": return updateSelect;
                case "md-datepicker": return updateDatepicker;
                case "md-list-item": return updateListItem;
                case "md-tabs": return updateTabs;
                case "md-slider": return updateSlider;
                case "md-toast": return updateToast;
                case "date-input": return updateDateInput;
                case "time-input": return updateTimeInput;
                case "time-zone-picker": return updateTimeZonePicker;
                default: return function () { };
            }
        }

    });
})();