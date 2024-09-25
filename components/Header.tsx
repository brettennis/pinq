import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Colors } from '@/constants/Colors';

export default function Header() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.inner}>
					<Text style={styles.title}>pinq</Text>
					<Ionicons name="menu" size={37} color={Colors.mono0} />
				</View>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.theme.a,
		height: 110,
	},
	inner: {
		// backgroundColor: Colors.theme.a_dk,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 15,
	},
	title: {
		color: Colors.mono0,
		fontSize: 40,
	}
});