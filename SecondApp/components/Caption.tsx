import {View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'

function Caption({ userName, content } : {userName: String; content:String}) {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <View style={{ marginHorizontal: 15, paddingVertical: 5 }}>
      <Text
        numberOfLines={expanded ? undefined : 2}
        onTextLayout={event => {
          if (!expanded) {
            setShowButton(event.nativeEvent.lines.length >= 2);
          }
        }}
        style={{
          letterSpacing: 1,
          lineHeight: 20,
        }}
      >
        <Text style={{ fontWeight: '600' }}>{userName} </Text>
        {content}
      </Text>

      {showButton && (
        <Pressable
          onPress={() => setExpanded(previousValue => !previousValue)}
          hitSlop={10}
        >
          <Text
            style={{
              fontWeight: '600',
              marginTop: 4,
              color: 'gray',
            }}
          >
            {expanded ? 'less' : 'more'}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

export default Caption