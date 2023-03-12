import * as React from "react";
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "@react-stately/list";
import { useListBox } from "@react-aria/listbox";
import { AsyncListFieldOption } from "./async-list-option";

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

export function AsyncListFieldListBox(props: ListBoxProps) {
  const ref = React.useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul {...listBoxProps} ref={listBoxRef} className="max-h-72 overflow-auto outline-none">
      {[...state.collection].map((item) => (
        <AsyncListFieldOption key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}
