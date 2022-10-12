//                                           60 chars -->   |
function makeComponent() : int {
  return {
    longCall() {
      complicatedFunction(importantArgument(), secondaryArgument())
      weirdStyle({ prop: 1 },
        1, 2, 3);
    },
    render() {
      const user = {
        name: "James"
      };
	  return <div>
        hello ${name}! JSX is <strong>supported</strong>
      </div>;
    }
  };
}
