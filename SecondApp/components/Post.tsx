import {
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import {
    Bookmark,
    EllipsisVertical,
    Heart,
    MessageCircle,
    Repeat2,
    Send,
} from 'lucide-react-native';
import Caption from './Caption';

export default function Post() {
    const [expand, setExpand] = useState(false);
    const { width } = useWindowDimensions();
    const [showButton, setShowButton] = useState(false);
    const posts = [
        {
            userName: 'AaravSharma',
            postImgUri: 'https://picsum.photos/id/1015/600/600',
            profileImgUri: 'https://i.pravatar.cc/150?img=1',
            Date: '13 Jul 2026',
            Content:
                'Nothing beats watching the sunrise after an early morning trek. The view was absolutely worth the effort!',
            Likes: 250,
            Comments: 12,
            Retweets: 5,
            Shares: 10,
        },
        {
            userName: 'PriyaVerma',
            postImgUri: 'https://picsum.photos/id/1025/600/600',
            profileImgUri: 'https://i.pravatar.cc/150?img=5',
            Date: '12 Jul 2026',
            Content:
                'Tried a new café today and finally finished reading the book I had been postponing for weeks. Productive day!',
            Likes: 67,
            Comments: 5,
            Retweets: 2,
            Shares: 8,
        },
        {
            userName: 'RohanMehta',
            postImgUri: 'https://picsum.photos/id/1040/600/600',
            profileImgUri: 'https://i.pravatar.cc/150?img=8',
            Date: '11 Jul 2026',
            Content:
                'Weekend football with friends never disappoints. Tired, happy, and already waiting for the next match.',
            Likes: 90,
            Comments: 8,
            Retweets: 5,
            Shares: 6,
        },
        {
            userName: 'SnehaKapoor',
            postImgUri: 'https://picsum.photos/id/1062/600/600',
            profileImgUri: 'https://i.pravatar.cc/150?img=20',
            Date: '10 Jul 2026',
            Content:
                'Spent the evening experimenting with photography. Still learning, but every picture teaches something new.',
            Likes: 75,
            Comments: 13,
            Retweets: 10,
            Shares: 7,
        },
        {
            userName: 'KabirSingh',
            postImgUri: 'https://picsum.photos/id/1074/600/600',
            profileImgUri: 'https://i.pravatar.cc/150?img=15',
            Date: '9 Jul 2026',
            Content:
                'Finally completed a side project I had been building for the last few weeks. Looking forward to sharing it soon!',
            Likes: 25,
            Comments: 2,
            Retweets: 1,
            Shares: 1,
        },
    ];
    return (
        <>
            {posts.map(post => (
                <View key={post.userName} style={styles.container}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 15,
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                            height: 50,
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '10',
                            }}
                        >
                            <View>
                                <Image
                                    source={{ uri: post.profileImgUri }}
                                    style={{ height: 30, width: 30, borderRadius: 15 }}
                                />
                            </View>
                            <View style={{ display: 'flex', gap: 2 }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 600,
                                        letterSpacing: 1,
                                        lineHeight: 15,
                                    }}
                                >
                                    {post.userName}
                                </Text>
                                <Text
                                    style={{ fontSize: 12, fontWeight: 400, letterSpacing: 1 }}
                                >
                                    Suggested for you
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 25,
                                alignItems: 'center',
                            }}
                        >
                            <View
                                style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 16,
                                    borderRadius: 10,
                                    backgroundColor: '#c5c6d0',
                                }}
                            >
                                <Text style={{ fontSize: 14, fontWeight: 600 }}>Follow</Text>
                            </View>
                            <View>
                                <EllipsisVertical size={20} />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Image
                            source={{ uri: post.postImgUri }}
                            style={{ height: 400, width }}
                        />
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginHorizontal: 15,
                            height: 40,
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 15,
                                alignItems: 'center',
                            }}
                        >
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 5,
                                    alignItems: 'center',
                                }}
                            >
                                <Heart size={25} />
                                <Text style={{ fontWeight: 500 }}>{post.Likes}</Text>
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 5,
                                    alignItems: 'center',
                                }}
                            >
                                <MessageCircle size={25} />
                                <Text style={{ fontWeight: 500 }}>{post.Comments}</Text>
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 5,
                                    alignItems: 'center',
                                }}
                            >
                                <Repeat2 size={25} />
                                <Text style={{ fontWeight: 500 }}>{post.Retweets}</Text>
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 5,
                                    alignItems: 'center',
                                }}
                            >
                                <Send size={25} />
                                <Text style={{ fontWeight: 500 }}>{post.Shares}</Text>
                            </View>
                        </View>
                        <View>
                            <Bookmark size={25} />
                        </View>
                    </View>
                    <Caption userName={post.userName} content={post.Content}/> 
                    <View style={{marginHorizontal:15, marginVertical:5}}><Text style={{fontSize:10, fontWeight:500, color:'gray', letterSpacing:1}}>{post.Date}</Text></View>
                </View>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
