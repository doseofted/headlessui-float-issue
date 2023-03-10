import type { ElementType, MutableRefObject, ReactElement } from 'react';
import type { VirtualElement } from '@floating-ui/core';
import type { DetectOverflowOptions, Middleware, Placement, Strategy } from '@floating-ui/dom';
import type { Options as OffsetOptions } from '@floating-ui/core/src/middleware/offset';
import type { Options as ShiftOptions } from '@floating-ui/core/src/middleware/shift';
import type { Options as FlipOptions } from '@floating-ui/core/src/middleware/flip';
import type { Options as AutoPlacementOptions } from '@floating-ui/core/src/middleware/autoPlacement';
import type { Options as HideOptions } from '@floating-ui/core/src/middleware/hide';
import type { Options as AutoUpdateOptions } from '@floating-ui/dom/src/autoUpdate';
import { type OriginClassResolver } from './origin-class-resolvers';
export interface FloatProps {
    as?: ElementType;
    floatingAs?: ElementType;
    show?: boolean;
    placement?: Placement;
    strategy?: Strategy;
    offset?: OffsetOptions;
    shift?: boolean | number | Partial<ShiftOptions & DetectOverflowOptions>;
    flip?: boolean | number | Partial<FlipOptions & DetectOverflowOptions>;
    arrow?: boolean | number;
    autoPlacement?: boolean | Partial<AutoPlacementOptions & DetectOverflowOptions>;
    hide?: boolean | Partial<HideOptions & DetectOverflowOptions>;
    autoUpdate?: boolean | Partial<AutoUpdateOptions>;
    zIndex?: number | string;
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
    originClass?: string | OriginClassResolver;
    tailwindcssOriginClass?: boolean;
    portal?: boolean | string;
    transform?: boolean;
    adaptiveWidth?: boolean;
    middleware?: Middleware[] | ((refs: {
        referenceEl: MutableRefObject<Element | VirtualElement | null>;
        floatingEl: MutableRefObject<HTMLElement | null>;
    }) => Middleware[]);
    className?: string | undefined;
    children: ReactElement[];
    onShow?: () => void;
    onHide?: () => void;
    onUpdate?: () => void;
}
export interface FloatArrowProps {
    as?: ElementType;
    offset?: number;
    className?: string | ((bag: FloatArrowRenderProp) => string);
    children?: ReactElement | ((slot: FloatArrowRenderProp) => ReactElement);
}
export interface FloatArrowRenderProp {
    placement: Placement;
}
declare function Arrow(props: FloatArrowProps): JSX.Element;
export declare const Float: import("react").ForwardRefExoticComponent<FloatProps & import("react").RefAttributes<ElementType<any>>> & {
    Arrow: typeof Arrow;
};
export {};
